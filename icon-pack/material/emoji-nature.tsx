import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21.9428 4.88C21.7628 4.35 21.2528 4 20.6828 4C20.6528 4 20.6228 4 20.5928 4H19.6028L19.2928 3.03C19.1528 2.43 18.6128 2 18.0028 2C17.3928 2 16.8528 2.43 16.7128 3.04L16.4028 4H15.4228C15.3928 4 15.3628 4 15.3328 4C14.7628 4 14.2528 4.35 14.0728 4.88C13.8828 5.44 14.1128 6.05 14.6328 6.36L15.5028 6.88L15.1028 8.12C14.8728 8.7 15.0628 9.37 15.5528 9.74C15.7828 9.91 16.0628 10 16.3328 10C16.6428 10 16.9428 9.89 17.1928 9.68L18.0028 8.98L18.8128 9.68C19.0628 9.89 19.3628 10 19.6728 10C19.9428 10 20.2228 9.91 20.4528 9.74C20.9528 9.37 21.1328 8.7 20.9028 8.12L20.5128 6.88L21.3828 6.36C21.8928 6.05 22.1228 5.44 21.9428 4.88ZM18.0028 7C17.4528 7 17.0028 6.55 17.0028 6C17.0028 5.45 17.4528 5 18.0028 5C18.5528 5 19.0028 5.45 19.0028 6C19.0028 6.55 18.5528 7 18.0028 7Z" />
      <Path d="M13.4928 10.51C13.0628 10.08 12.5528 9.78 12.0028 9.58V8H11.0028V9.38C10.8928 9.37 10.7728 9.35 10.6628 9.35C9.64283 9.35 8.61283 9.74 7.83283 10.52C7.71283 10.64 7.53283 10.82 7.33283 11.02L6.00283 10.52C4.44283 9.97 2.72283 10.79 2.17283 12.34C1.90283 13.09 1.94283 13.91 2.29283 14.63C2.52283 15.11 2.87283 15.5 3.29283 15.79C2.91283 17.14 3.23283 18.64 4.29283 19.7C5.07283 20.48 6.09283 20.87 7.12283 20.87C7.49283 20.87 7.85283 20.8 8.21283 20.7C8.50283 21.12 8.89283 21.47 9.37283 21.7C9.78283 21.9 10.2128 22 10.6528 22C10.9928 22 11.3328 21.94 11.6628 21.83C13.2228 21.28 14.0428 19.56 13.4828 17.98L12.9928 16.68C13.1928 16.48 13.3728 16.3 13.4928 16.18C14.3628 15.31 14.7328 14.14 14.6328 13.01H16.0028V12.01H14.4128C14.2228 11.46 13.9228 10.95 13.4928 10.51ZM7.58283 18.82C7.43283 18.86 7.28283 18.88 7.12283 18.88C6.59283 18.88 6.08283 18.67 5.71283 18.29C5.33283 17.91 5.12283 17.41 5.12283 16.88C5.12283 16.72 5.15283 16.56 5.18283 16.41C5.32283 16.42 5.46283 16.44 5.60283 16.44C6.45283 16.44 7.28283 16.24 8.04283 15.96C7.72283 16.85 7.50283 17.83 7.58283 18.82ZM4.67283 14.29C4.42283 14.2 4.22283 14.02 4.10283 13.78C3.98283 13.54 3.97283 13.27 4.06283 13.02C4.25283 12.5 4.82283 12.23 5.32283 12.41L8.48283 13.6C7.33283 14.2 5.85283 14.71 4.67283 14.29ZM10.9928 19.94C10.7428 20.03 10.4728 20.02 10.2328 19.9C9.99283 19.79 9.81283 19.58 9.72283 19.33C9.30283 18.15 9.81283 16.68 10.4228 15.53L11.6028 18.66C11.7828 19.18 11.5128 19.76 10.9928 19.94ZM12.2028 14.6L11.5928 12.99C11.5928 12.98 11.5828 12.97 11.5728 12.96C11.5528 12.92 11.5328 12.88 11.5128 12.84C11.4928 12.8 11.4728 12.77 11.4428 12.73C11.4128 12.7 11.3828 12.67 11.3528 12.64C11.3228 12.61 11.2928 12.58 11.2628 12.55C11.2328 12.52 11.1928 12.5 11.1528 12.48C11.1128 12.46 11.0828 12.43 11.0328 12.42C11.0228 12.42 11.0128 12.41 11.0028 12.4L9.40283 11.8C9.76283 11.51 10.1928 11.34 10.6628 11.34C11.1928 11.34 11.7028 11.55 12.0728 11.93C12.8028 12.66 12.8428 13.81 12.2028 14.6Z" />
    </Svg>
  )
}

Icon.displayName = 'EmojiNature'

/**
 * Material Icon: Emoji Nature
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:emoji_nature Material Icon Docs}
 */
export const EmojiNature = memo(Icon)
