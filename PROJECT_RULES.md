# TwinAI Project Rules

## 1. Project Vision
TwinAI is a production-grade AI Twin platform for creating personalized, modular, and future-ready AI experiences. The platform is built around a clean, maintainable architecture that prioritizes scalability, security, and long-term extensibility.

## 2. Project Mission
The mission of TwinAI is to provide a solid foundation for building AI Twin experiences that are safe, extensible, and provider-agnostic. The system should support future growth across chat, memory, knowledge, authentication, and multi-provider AI integration without changing the core architecture.

## 3. Architecture Principles
- The current architecture is locked and must be treated as the baseline.
- Do not introduce new architectural patterns without explicit approval.
- Keep the system modular and layered.
- Favor clear separation of concerns.
- Keep UI, business logic, and configuration responsibilities distinct.
- Prefer TypeScript and Next.js App Router patterns already used by the project.

## 4. Folder Structure
The repository structure should follow the existing layout:

```text
src/
  app/
  components/
  config/
  features/
  hooks/
  lib/
  services/
  styles/
  types/
  utils/
```

New documentation or planning files should live in the root-level docs folder and should not introduce alternate application structure.

## 5. Naming Convention
- Use descriptive, lowercase, camelCase names for variables and functions.
- Use PascalCase for React components and TypeScript types.
- Use kebab-case for file names where appropriate in the app structure.
- Keep module names consistent with the existing folder organization.

## 6. Import Rules
- Prefer path aliases such as @/ when importing project modules.
- Keep imports explicit and readable.
- Do not create circular dependencies.
- Do not import UI components directly into configuration or service layers.
- Keep provider-specific logic isolated from UI code.

## 7. Coding Standards
- Write TypeScript only.
- Keep code production quality and maintainable.
- Favor small, reusable, composable modules.
- Avoid unnecessary packages and dependencies.
- Keep logic simple and explicit.
- Do not modify unrelated files.
- Do not change existing application behavior unless the task explicitly requires it.

## 8. Security Rules
- Never expose private or sensitive information in public-facing UI or conversations.
- Never hardcode secrets, API keys, or tokens in source files.
- Keep private profile information isolated from public-facing layers.
- Respect permission boundaries between public, private, memory, and knowledge systems.
- Do not send private profile data to AI providers.

## 9. AI Rules
- The AI identity must remain provider-agnostic.
- The platform should support future integration with Gemini, OpenAI, Claude, or local models without changing the identity layer.
- Do not claim unsupported AI capabilities in demo or development environments.
- Keep demo behavior clearly separated from production-ready integrations.

## 10. Git Workflow
- Make focused changes scoped to the requested task.
- Avoid unrelated file modifications.
- Preserve existing architecture and application behavior unless explicitly instructed.
- Commit changes with clear, descriptive messages.

## 11. Git Workflow
Every completed feature must follow this sequence:
1. Test locally
2. npm run lint
3. npm run build
4. git add .
5. git commit -m "Feature: <name>"
6. git push

Never start the next feature before the current feature has been:
- Tested
- Committed
- Pushed to GitHub

If any step fails (lint, build, commit, or push), stop and fix the issue before continuing.

## 12. Development Rules
- One feature at a time.
- Explain the implementation before writing code.
- Never refactor the project architecture without approval.
- Prefer reusable components over duplicated code.
- Never hardcode secrets or API keys.
- Preserve backward compatibility unless explicitly approved.

## 13. AI Assistant Rules
- Copilot generates code.
- Hasib is the Project Architect.
- Never make architectural decisions without approval.
- Always keep the project scalable and modular.

## 14. Safety Rules
- Never delete existing files unless explicitly instructed.
- Never rename folders without approval.
- Never modify unrelated files.
- Keep changes minimal and isolated.

## 15. Documentation Rules
- Keep documentation accurate, concise, and aligned with the current implementation.
- Update docs when architecture or workflow changes are introduced.
- Use clear headings and examples for maintainability.
- Preserve the existing architecture as locked unless a new task explicitly asks for an approved change.
