import { SnapshotModule } from './snapshot.module';

describe('SnapshotModule', () => {
  let snapshotModule: SnapshotModule;

  beforeEach(() => {
    snapshotModule = new SnapshotModule();
  });

  it('should create an instance', () => {
    expect(snapshotModule).toBeTruthy();
  });
});
