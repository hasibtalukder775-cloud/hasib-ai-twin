# Architecture Overview

This document captures the current locked architecture of the TwinAI project.

## Current Structure
- App Router entry points under src/app
- Reusable UI under src/components
- Feature-specific logic under src/features
- Shared configuration under src/config
- Utility helpers under src/utils
- Type definitions under src/types

## Architectural Notes
- The current architecture should remain unchanged unless explicitly approved.
- UI components should remain focused on presentation and interaction.
- Shared logic should stay modular and reusable.
- AI provider integration should remain isolated from the UI layer.
