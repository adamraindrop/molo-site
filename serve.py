#!/usr/bin/env python3
"""Static server for the Molo protocol lander prototype.

python -m http.server sends no cache headers, so browsers apply heuristic
caching to the .jsx files. Babel then transpiles a stale copy and the page
silently renders an old build after an edit. Everything here is sent
no-store so a plain refresh always shows current files.
"""
import functools, http.server, socketserver, sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 4190


class NoCache(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def log_message(self, fmt, *args):
        pass


socketserver.TCPServer.allow_reuse_address = True
handler = functools.partial(NoCache, directory=".")
with socketserver.TCPServer(("", PORT), handler) as httpd:
    print("Molo lander on http://localhost:%d/Protocol%%20Landing%%20Page.html (no-store)" % PORT)
    httpd.serve_forever()
