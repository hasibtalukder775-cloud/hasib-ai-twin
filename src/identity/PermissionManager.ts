export class PermissionManager {
  constructor() {}

  canReadPublic() {
    return true;
  }

  canReadPrivate() {
    return false;
  }

  canReadMemory() {
    return false;
  }

  canReadKnowledge() {
    return true;
  }
}
