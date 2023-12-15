# ofjustpy-svelte-client-bundler
Vite bundler for ofjustpy client runtime build using svelte (derived from: https://github.com/mvsde/svelte-micro-frontend)

Status: No longer able to upgrade the repos here due to dependency hell. 
This stupid error
```
failed to load config from /home/kabiraatmonallabs/DrivingRange/ofjustpy-svelte-client-bundler/vite.config.js
error during build:
Error: Build failed with 1 error:
node_modules/esbuild/lib/main.js:1373:27: ERROR: [plugin: externalize-deps] Failed to resolve "@sveltejs/vite-plugin-svelte". This package is ESM only but it was tried to load by `require`. See http://vitejs.dev/guide/troubleshooting.html#this-package-is-esm-only for more details.
    at failureErrorWithLog (/home/kabiraatmonallabs/DrivingRange/ofjustpy-svelte-client-bundler/node_modules/esbuild/lib/main.js:1649:15)
    at /home/kabiraatmonallabs/DrivingRange/ofjustpy-svelte-client-bundler/node_modules/esbuild/lib/main.js:1058:25
    at runOnEndCallbacks (/home/kabiraatmonallabs/DrivingRange/ofjustpy-svelte-client-bundler/node_modules/esbuild/lib/main.js:1484:45)
    at buildResponseToResult (/home/kabiraatmonallabs/DrivingRange/ofjustpy-svelte-client-bundler/node_modules/esbuild/lib/main.js:1056:7)
    at /home/kabiraatmonallabs/DrivingRange/ofjustpy-svelte-client-bundler/node_modules/esbuild/lib/main.js:1085:16
    at responseCallbacks.<computed> (/home/kabiraatmonallabs/DrivingRange/ofjustpy-svelte-client-bundler/node_modules/esbuild/lib/main.js:703:9)                                                        
    at handleIncomingPacket (/home/kabiraatmonallabs/DrivingRange/ofjustpy-svelte-client-bundler/node_modules/esbuild/lib/main.js:762:9)
    at Socket.readFromStdout (/home/kabiraatmonallabs/DrivingRange/ofjustpy-svelte-client-bundler/node_modules/esbuild/lib/main.js:679:7)
    at Socket.emit (node:events:517:28)                  
    at addChunk (node:internal/streams/readable:335:12)
	
	```
	
props up all the time. Take the src/ directory and more to latest branchof svelte-micro-frontend. 

