This is a WIP service configuration for web apps

## This is designed to be a [Twelve-Factor App](https://12factor.net/)
1. Every deployment of this application can be mapped back to a single commit. All services must be deployed together.
2. Dependencies are explicit by using absolute versions, and isolated by using Docker images.
3. All environment-specific config is delivered to containers via env vars. Credentials are obtained via a secrets service.
4. All communication between services is done over the network, and is secured.
5. Docker images serve as the builds, and should be tagged with a commit hash. Releases require a service orchestrator to provide configs.
6. Services (processes) run in ephemeral Docker containers. All data persistence must be done using
7. TODO: All interactions with this application are done through a port binding (using some network protocol).
8. Container orchestration (probably Kubernetes) will handle concurrency, and adhere's very closely to the Unix process model.
9. TODO: Containers should be lightweight and services should be prepared for requests to fail.
10. TODO: Using docker images, the only differences between deployments should be the config.
11. Logs are not managed by the application, but by the container orchestrator.
12. Adminitrative tasks are run manually-executed scripts.


## Advice for Developers:
- Use absolute image versions and ensure they are captured in the "release".
- Prefer seed scripts over persistent volumes.
- Use service names as hostnames in your dev config.
- Expose services to the host (port binding) **only** when necessary.
