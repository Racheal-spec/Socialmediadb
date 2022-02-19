
export interface ThemeProps {
  background: string;
  color: string;
  cardbg: string;
  cardtext: string;
  numcolor: string;
  cardhover: string;
  shadow: string;
}

export const DarkTheme: ThemeProps = {
   background: 'var(--dark-bg)',
   color: 'var(--dark-text)',
   cardbg: 'var(--cardbg-dark)',
   cardtext: 'var(--cardtext-dark)',
   numcolor: 'var(--followers-dark)',
   cardhover: 'var(--cardhover-dark)',
   shadow: 'var(--shadow-dark)',
}
export const LightTheme: ThemeProps = {
 background: 'var(--light-bg)',
 color: 'var(--light-text)',
 cardbg: 'var(--cardbg-light)',
 cardtext: 'var(--cardtext-light)',
 numcolor: 'var(--followers-light)',
 cardhover: 'var(--cardhover-light)',
 shadow: 'var(--shadow-light)',
}