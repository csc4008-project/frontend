# csc4008-project-ui

This repository contains the code for the frontend app, which uses Vue.js.

## Bringing up the frontend

When developing APIs for the frontend, you can use the Docker container.  The `VUE_APP_ROOT_API` environment variable can be set to specify the URL of the API.

Start by grabbing the latest frontend build:

```
docker pull gitlab.dylanwilson.dev:5050/qub/csc4008-project-ui:latest
```

You can then run the frontend using:

```
docker run -d -p 8080:8080 gitlab.dylanwilson.dev:5050/qub/csc4008-project-ui:latest
```

**Note:** This will start and detach the container.  If you would like to see the output in your terminal, omit the `-d` option.

The frontend is now available at `http://localhost:8080`.

By default, the UI will send API requests to `localhost:5000`, you can modify this behaviour by setting the `VUE_APP_ROOT_API` environment variable.

```
docker run -d -p 8080:8080 -e VUE_APP_ROOT_API="https://localhost:9000/" docker.io/library/csc4008-project-ui-dev
```

**Note:** The trailing `/` is important here, omitting it will cause malformed URLs (i.e. `http://localhost:9000login`).

## Development commands

If you are developing new features for the frontend, you might wish to install `npm`.  Vue.js provides a live development server which can be started using `npm run serve`.  An alternative would be to create a bind mount which mounts your local directory onto `/app` in the container.

For additional commands, see below.

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
