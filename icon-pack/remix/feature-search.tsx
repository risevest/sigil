import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Mask, Path, Rect } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 25 24" fill={color} height={size} width={size} {...otherProps}>
      <Mask
        id="mask0_1009_49467"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="25"
        height="24"
      >
        <Rect x="0.890625" width="24" height="24" fill={color} />
      </Mask>
      <G mask="url(#mask0_1009_49467)">
        <Path
          d="M20.1906 8.9L23.3906 12.1L21.9906 13.5L18.7906 10.3C18.4406 10.5 18.0656 10.6667 17.6656 10.8C17.2656 10.9333 16.8406 11 16.3906 11C15.1406 11 14.0781 10.5625 13.2031 9.6875C12.3281 8.8125 11.8906 7.75 11.8906 6.5C11.8906 5.25 12.3281 4.1875 13.2031 3.3125C14.0781 2.4375 15.1406 2 16.3906 2C17.6406 2 18.7031 2.4375 19.5781 3.3125C20.4531 4.1875 20.8906 5.25 20.8906 6.5C20.8906 6.95 20.824 7.375 20.6906 7.775C20.5573 8.175 20.3906 8.55 20.1906 8.9ZM16.3906 9C17.0906 9 17.6823 8.75833 18.1656 8.275C18.649 7.79167 18.8906 7.2 18.8906 6.5C18.8906 5.8 18.649 5.20833 18.1656 4.725C17.6823 4.24167 17.0906 4 16.3906 4C15.6906 4 15.099 4.24167 14.6156 4.725C14.1323 5.20833 13.8906 5.8 13.8906 6.5C13.8906 7.2 14.1323 7.79167 14.6156 8.275C15.099 8.75833 15.6906 9 16.3906 9ZM4.89062 22C4.34063 22 3.86979 21.8042 3.47813 21.4125C3.08646 21.0208 2.89062 20.55 2.89062 20V6C2.89062 5.45 3.08646 4.97917 3.47813 4.5875C3.86979 4.19583 4.34063 4 4.89062 4H10.3906C10.2073 4.41667 10.0823 4.84583 10.0156 5.2875C9.94896 5.72917 9.91563 6.16667 9.91563 6.6C9.91563 8.41667 10.5573 9.93333 11.8406 11.15C13.124 12.3667 14.649 12.975 16.4156 12.975C16.7323 12.975 17.049 12.9542 17.3656 12.9125C17.6823 12.8708 18.0073 12.8 18.3406 12.7L20.8906 15.25V20C20.8906 20.55 20.6948 21.0208 20.3031 21.4125C19.9115 21.8042 19.4406 22 18.8906 22H4.89062Z"
          fill={color}
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'FeatureSearch'

/**
 * Remix Icon: Feature Search
 * @see {@link https://remixicon.com/icon/feature-search Remix Icon Docs}
 */
export const FeatureSearch = memo(Icon)
