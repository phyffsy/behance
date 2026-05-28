export type ScreenName = 'login' | 'home' | 'detail' | 'order' | 'success';

export type ScreenProps = {
  go: (screen: ScreenName, productId?: number) => void;
  productId?: number;
};