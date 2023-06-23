import { useSyncExternalStore } from 'react';

import PositionStore, {
  PositionListStoreSnapshot,
} from '../stores/PositionListStore';

const cartStore = new PositionStore();

export default function useCartStore(): [
  PositionListStoreSnapshot,
  PositionStore,
  // eslint-disable-next-line indent
] {
  const snapshot = useSyncExternalStore(
    onStoreChange => {
      cartStore.addListener(onStoreChange);
      return () => cartStore.removeListener(onStoreChange);
    },
    () => cartStore.getSnapshot(),
  );
  return [snapshot, cartStore];
}
