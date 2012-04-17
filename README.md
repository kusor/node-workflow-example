# Overview

Usage examples for [node-workflow](http://kusor.github.com/node-workflow/).

# Usage

Pre-requirements:

These examples can run using any of the supported backend modules for `wf`.
Example files are provided for these modules.

If you want to run the example using Redis, you need:

- Working Redis Server. (Version 2.4.+).
- Use `config.redis.json` as your configuration file when running the services.
- Copy the file `package-redis.json` to `package.json`.

If you want to use PostgreSQL:

- Working PostgreSQL 9+ server.
- Use `config.pg.json` as your configuration file when running the services.
- Copy the file `package-pg.json` to `package.json`.

# Clone the repo and build the deps:

    git clone git://github.com/kusor/node-workflow-example.git
    cd node-workflow-example
    make all

Note `make all` will setup all the required dependencies, node modules and run
`make check`. In order to just setup node modules, `make setup` is enough.

To run the Workflow API server:

    ./bin/workflow-api path/to/config.json

To run a Job Runner:

    ./bin/workflow-runner path/to/config.json

Note that it's perfectly fine to run more than one Runner, either on the same
or different machines, as far as they have access to Redis Server.

This repository contains everything needed to illustrate:

- An example config file which should be modified to properly match your local
  environment.

Remember that, in order to process any `job` the `workflow-runner` needs
to be initialized pointing to the aforementioned configuration file:

    ./node_modules/.bin/workflow-runner config.json

Also, in order to be able to run the API based example mentioned below, the
`workflow-api` HTTP server needs to be up and running too:

    ./node_modules/.bin/workflow-api config.json

Contents for the other files are:

- An example of how to use node-workflow as a node module in order to create
  workflows, queue jobs and wait for the results. See `module.js`.
- Also, an example of how to achieve same goal using Workflow API instead of
  the node module. See `api.js`.
- Both examples share the same workflow definition, contained at the file
  `shared-workflow.js`. The beginning of the aforementioned files
  can be useful to understand the differences when trying to create a workflow
  using these different approaches.
- Finally, this directory also contains a file `node.js` which does
  exactly the same thing than the workflow/job does - create and star a gist
  using your github's username and password - but straight from NodeJS. This
  file is useful in order to understand the differences between writing code
  to be executed by NodeJS directly, and using it to create workflows and the
  associated tasks. Remember code withing tasks runs sandboxed using
  [Node's VM API](http://nodejs.org/docs/latest/api/vm.html) and that tasks
  are totally independent, and run each one on its own child process.

# LICENSE

The MIT License (MIT) Copyright (c) 2012 Pedro Palazón Candel

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
