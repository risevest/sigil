import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 2C15.0675 2 18.426 5.03562 18.9337 8.96494L21.1842 12.5037C21.3324 12.7367 21.3025 13.0847 20.9593 13.2317L19 14.071V17C19 18.1046 18.1046 19 17 19H15.001L15 22H6L6.00025 18.3061C6.00033 17.1252 5.56351 16.0087 4.7555 15.0011C3.65707 13.6313 3 11.8924 3 10C3 5.58172 6.58172 2 11 2ZM11 4C7.68629 4 5 6.68629 5 10C5 11.3849 5.46818 12.6929 6.31578 13.7499C7.40965 15.114 8.00036 16.6672 8.00025 18.3063L8.00013 20H13.0007L13.0017 17H17V12.7519L18.5497 12.0881L17.0072 9.66262L16.9501 9.22118C16.5665 6.25141 14.0243 4 11 4ZM11 7C11.5523 7 12 7.44772 12 8V9H13C13.5523 9 14 9.44772 14 10C14 10.5523 13.5523 11 13 11H12V12C12 12.5523 11.5523 13 11 13C10.4477 13 10 12.5523 10 12V10.999L9 11C8.44772 11 8 10.5523 8 10C8 9.44772 8.44772 9 9 9L10 8.999V8C10 7.44772 10.4477 7 11 7Z" />
    </Svg>
  )
}

Icon.displayName = 'PsychotherapyLine'

/**
 * Remix Icon: Psychotherapy Line
 * @see {@link https://remixicon.com/icon/psychotherapy-line Remix Icon Docs}
 */
export const PsychotherapyLine = memo(Icon)
