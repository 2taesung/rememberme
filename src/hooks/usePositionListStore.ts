import { useSyncExternalStore } from 'react';

import PositionListStore, {
  PositionListStoreSnapshot,
} from '../stores/PositionListStore';

const positionListStore = new PositionListStore();

export default function usePostionListStore(): [
  PositionListStoreSnapshot,
  PositionListStore,
  // eslint-disable-next-line indent
] {
  const snapshot = useSyncExternalStore(
    onStoreChange => {
      positionListStore.addListener(onStoreChange);
      return () => positionListStore.removeListener(onStoreChange);
    },
    () => positionListStore.getSnapshot(),
  );
  return [snapshot, positionListStore];
}
