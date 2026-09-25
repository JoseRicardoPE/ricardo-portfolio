# Git Workflow

This document defines the Git workflow and branch naming conventions used in the Ricardo Portfolio project.

## Main Branch

`main` is the stable branch of the project.

All development work must be performed in a separate branch and integrated into `main` through a Pull Request.

Direct development on `main` should be avoided.

## Branch Naming Convention

Branches follow this format:

`<type>/us-<number>-<short-description>`

Examples:

- `feature/us-021-header`
- `fix/us-035-mobile-navigation`
- `refactor/us-040-project-service`
- `chore/us-016-project-foundations`
- `docs/us-005-technical-architecture`
- `test/us-048-project-service`
- `ci/us-055-frontend-pipeline`

### Branch Types

| Type | Purpose |
| --- | --- |
| `feature` | New functionality |
| `fix` | Bug fixes |
| `refactor` | Code improvements without changing behavior |
| `chore` | Project configuration, dependencies or maintenance |
| `docs` | Documentation changes |
| `test` | Tests and testing infrastructure |
| `ci` | CI/CD configuration |

## Development Workflow

1. Update the local `main` branch.

   ```
   git checkout main
   git pull origin main
   ```

2. Create a branch from main.
    
    ```
    git checkout -b <type>/us-<number>-<short-description>
    ```

3. Implement the changes required by the User Story.

4. Review the changes locally.
    
    ```
    git status
    git diff
    ```

5. Stage and commit the changes.

    ```
    git add .
    git commit -m "<type>: <description>"
    ```

6. Push the branch to GitHub.

    ```
    git push -u origin <branch-name>
    ```

7. Create a Pull Request targeting main.

8. Verify the Acceptance Criteria and required checks.

9. Merge the Pull Request into main.

10. Delete the development branch after the merge.

## Commit Convention

Commit messages follow a simplified Conventional Commits convention:

`<type>: <description>`

Examples:

- feat: implement responsive header
- fix: correct mobile navigation behavior
- refactor: simplify project service
- chore: configure frontend project
- docs: define git workflow
- test: add project service tests
- ci: configure frontend pipeline

Commit messages should be concise, written in English, and describe the purpose of the change.

## Pull Requests

Each Pull Request should:

- Target the main branch.
- Be associated with its User Story when applicable.
- Have a clear title and description.
- Include only changes related to the corresponding User Story.
- Satisfy the Acceptance Criteria before being merged.
- Pass the required automated checks once CI/CD is available.