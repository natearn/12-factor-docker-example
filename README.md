## This template is designed to follow the [Twelve-Factor App](https://12factor.net/) guidelines.
1. One codebase is used for all deployments.
2. By using docker images, dependencies are explicit and isolated.
3. Config is delivered through environment variables; secrets are not.
4. All communication between services is done over the network.
5. Docker images are the configurable builds; all releases use the same image.
6. Containers should be stateless and not share information directly (no shared volumes).
7. Service images are fully self-contained applications.
8. Container orchestration (ex. Kubernetes) can be used to handle application scaling.
9. Images should be light-weight and fault-tolerant. Requests may fail; containers may be terminated unexpectedly.
10. The development and production deployments should be separate configurations of the same base image.
11. Services should not be concerned with the overall logging solution, but should log consistently.
12. Services should not be concerned with administrative tasks; keep them separate.

### Configuration and Secrets
- Configuration is anything that is expected to vary between deployments (ex. backing service addresses).
- Configuration **should not** alter the behaviour of the application (ex. feature flags). As a rule, the application should never be conditional upon the environment that it is run in.
- Secrets are technically configuration, but require a more secure mechanism than environment variables.

### Development
- Use absolute image versions and ensure they are captured in the "release" such that they can be audited.
- Prefer seed scripts over persistent data volumes. Seed scripts are repeatable and easier to share.

### Testing
- TDD using end-to-end tests is encouraged.

### Deployment
