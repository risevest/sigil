import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 21.9967C6.47715 21.9967 2 17.5195 2 11.9967C2 6.47384 6.47715 1.99669 12 1.99669C17.5228 1.99669 22 6.47384 22 11.9967C22 17.5195 17.5228 21.9967 12 21.9967ZM17.051 18.2008L16.1894 14.7542C16.0781 14.309 15.6781 13.9967 15.2192 13.9967H8.78078C8.32191 13.9967 7.92193 14.309 7.81063 14.7542L6.94897 18.2008C8.32629 19.3235 10.0845 19.9967 12 19.9967C13.9155 19.9967 15.6737 19.3235 17.051 18.2008ZM10 11.9967H14V10.4967L12.9615 6.86202C12.8666 6.52981 12.6069 6.27014 12.2747 6.17522C11.7437 6.0235 11.1902 6.33099 11.0385 6.86202L10 10.4967V11.9967Z" />
    </Svg>
  )
}

Icon.displayName = 'MarkupFill'

/**
 * Remix Icon: Markup Fill
 * @see {@link https://remixicon.com/icon/markup-fill Remix Icon Docs}
 */
export const MarkupFill = memo(Icon)
