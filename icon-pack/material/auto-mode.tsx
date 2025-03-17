import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.055 3.53539C17.385 2.14539 15.315 1.23539 13.025 1.02539V3.03539C14.755 3.22539 16.335 3.91539 17.635 4.95539L19.055 3.53539Z" />
      <Path d="M11.025 3.03539V1.02539C8.73502 1.22539 6.66502 2.14539 4.99502 3.53539L6.41502 4.95539C7.71502 3.91539 9.29502 3.22539 11.025 3.03539Z" />
      <Path d="M5.00502 6.36539L3.58502 4.94539C2.19502 6.61539 1.28502 8.68539 1.07502 10.9754H3.08502C3.27502 9.24539 3.96502 7.66539 5.00502 6.36539Z" />
      <Path d="M20.965 10.9754H22.975C22.765 8.68539 21.855 6.61539 20.465 4.94539L19.045 6.36539C20.085 7.66539 20.775 9.24539 20.965 10.9754Z" />
      <Path d="M7.02502 11.9754L10.465 13.5354L12.025 16.9754L13.585 13.5354L17.025 11.9754L13.585 10.4154L12.025 6.97539L10.465 10.4154L7.02502 11.9754Z" />
      <Path d="M12.025 20.9754C8.91502 20.9754 6.17502 19.3854 4.56502 16.9754H7.02502V14.9754H1.02502V20.9754H3.02502V18.2754C5.01502 21.1154 8.29502 22.9754 12.025 22.9754C16.895 22.9754 21.025 19.8054 22.465 15.4154L20.505 14.9654C19.275 18.4554 15.945 20.9754 12.025 20.9754Z" />
    </Svg>
  )
}

Icon.displayName = 'AutoMode'

/**
 * Material Icon: Auto Mode
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:auto_mode Material Icon Docs}
 */
export const AutoMode = memo(Icon)
