```markdown
# hesamsamani-codes Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development patterns and conventions used in the `hesamsamani-codes` TypeScript repository. It covers file organization, code style, commit practices, and testing patterns, enabling contributors to write consistent and maintainable code.

## Coding Conventions

### File Naming
- **PascalCase** is used for file names.
  - Example: `MyComponent.ts`, `UserService.ts`

### Import Style
- **Relative imports** are preferred.
  - Example:
    ```typescript
    import { UserService } from './UserService';
    ```

### Export Style
- **Named exports** are used instead of default exports.
  - Example:
    ```typescript
    // UserService.ts
    export function UserService() { ... }
    ```

### Commit Messages
- **Mixed types** are used, with common prefixes like `docs` and `ui`.
- **Average length:** ~50 characters.
  - Example:
    ```
    docs: update README with installation instructions
    ui: improve button accessibility
    ```

## Workflows

### Documentation Updates
**Trigger:** When updating or adding documentation files.
**Command:** `/update-docs`

1. Edit or add documentation files (e.g., `README.md`).
2. Use the `docs:` prefix in your commit message.
3. Push your changes to the repository.

### UI Changes
**Trigger:** When making changes to user interface components.
**Command:** `/update-ui`

1. Modify relevant UI files (e.g., components).
2. Use the `ui:` prefix in your commit message.
3. Push your changes to the repository.

## Testing Patterns

- **Test files** use the `*.test.*` naming pattern.
  - Example: `UserService.test.ts`
- **Testing framework** is not specified; check existing test files for conventions.
- Example test file structure:
  ```typescript
  // UserService.test.ts
  import { UserService } from './UserService';

  describe('UserService', () => {
    it('should return user data', () => {
      // test implementation
    });
  });
  ```

## Commands
| Command        | Purpose                                |
|----------------|----------------------------------------|
| /update-docs   | Start a documentation update workflow  |
| /update-ui     | Start a UI change workflow             |
```
