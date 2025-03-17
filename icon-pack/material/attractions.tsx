import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.1487 14.42C20.3787 13.65 20.4987 12.84 20.4987 12C20.4987 11.16 20.3787 10.35 20.1487 9.58C20.9287 8.98 21.1687 7.88 20.6587 7C20.1487 6.12 19.0787 5.77 18.1687 6.15C17.0587 4.98 15.6087 4.12 13.9887 3.73C13.8487 2.75 13.0087 2 11.9987 2C10.9887 2 10.1487 2.75 10.0187 3.73C8.38871 4.12 6.94871 4.98 5.82871 6.15C4.91871 5.77 3.84871 6.12 3.33871 7C2.82871 7.88 3.06871 8.98 3.84871 9.58C3.61871 10.35 3.49871 11.16 3.49871 12C3.49871 12.84 3.61871 13.65 3.84871 14.42C3.06871 15.02 2.82871 16.12 3.33871 17C3.84871 17.88 4.91871 18.23 5.82871 17.85C6.22871 18.27 6.65871 18.64 7.12871 18.97L5.77871 22H7.65871L8.63871 19.81C9.07871 20 9.53871 20.15 10.0187 20.27C10.1487 21.25 10.9887 22 11.9987 22C13.0087 22 13.8487 21.25 13.9787 20.27C14.4387 20.16 14.8887 20.01 15.3187 19.83L16.2987 22H18.1787L16.8387 19C17.3187 18.66 17.7687 18.28 18.1787 17.85C19.0887 18.23 20.1687 17.88 20.6687 17C21.1687 16.12 20.9287 15.02 20.1487 14.42ZM13.5587 18.75C13.1887 18.29 12.6287 18 11.9987 18C11.3687 18 10.7987 18.29 10.4287 18.75C10.0287 18.66 9.63871 18.54 9.26871 18.38L10.6987 15.19C11.0987 15.35 11.5387 15.44 11.9987 15.44C12.4387 15.44 12.8687 15.36 13.2587 15.21L14.6787 18.39C14.3187 18.54 13.9487 18.66 13.5587 18.75ZM10.4787 12.02C10.4787 11.19 11.1487 10.52 11.9787 10.52C12.8087 10.52 13.4787 11.19 13.4787 12.02C13.4787 12.85 12.8087 13.52 11.9787 13.52C11.1487 13.52 10.4787 12.85 10.4787 12.02ZM18.7087 14.01C18.0987 14.08 17.5287 14.42 17.1887 15C16.8687 15.56 16.8487 16.2 17.0687 16.75C16.7887 17.04 16.4887 17.3 16.1687 17.54L14.6687 14.19C15.1587 13.6 15.4487 12.85 15.4487 12.03C15.4487 10.14 13.8987 8.62 11.9887 8.62C10.0787 8.62 8.52871 10.15 8.52871 12.03C8.52871 12.83 8.80871 13.57 9.27871 14.16L7.75871 17.55C7.44871 17.32 7.15871 17.07 6.88871 16.79C7.14871 16.23 7.12871 15.57 6.79871 15C6.45871 14.41 5.86871 14.06 5.23871 14.01C5.01871 13.33 4.90871 12.61 4.90871 11.86C4.90871 11.22 4.99871 10.6 5.15871 10.01C5.81871 9.98 6.45871 9.63 6.80871 9.01C7.17871 8.38 7.15871 7.63 6.81871 7.03C7.73871 6.05 8.92871 5.34 10.2687 5C10.6087 5.59 11.2587 6 11.9987 6C12.7387 6 13.3887 5.6 13.7287 5C15.0687 5.34 16.2587 6.07 17.1687 7.05C16.8487 7.64 16.8387 8.38 17.1987 9C17.5487 9.6 18.1587 9.95 18.7987 10C18.9587 10.59 19.0487 11.21 19.0487 11.86C19.0487 12.61 18.9287 13.33 18.7087 14.01Z" />
    </Svg>
  )
}

Icon.displayName = 'Attractions'

/**
 * Material Icon: Attractions
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:attractions Material Icon Docs}
 */
export const Attractions = memo(Icon)
