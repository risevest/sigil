import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6.1039 5.90972C6.68754 6.38386 6.90648 6.34768 8.00238 6.27457L18.3342 5.65418C18.5533 5.65418 18.3711 5.43557 18.2981 5.39924L16.5822 4.15879C16.2534 3.90354 15.8153 3.61122 14.9758 3.68434L4.9715 4.41403C4.60665 4.45021 4.53377 4.63262 4.67909 4.77886L6.1039 5.90972ZM6.72422 8.31752L6.72422 19.1884C6.72422 19.7726 7.01618 19.9912 7.6733 19.955L19.028 19.298C19.6854 19.2619 19.7586 18.86 19.7586 18.3854V7.58753C19.7586 7.1137 19.5764 6.85816 19.1739 6.89464L7.30815 7.58753C6.87027 7.62433 6.72422 7.84337 6.72422 8.31752ZM17.9335 8.90066C18.0063 9.22933 17.9335 9.55767 17.6043 9.5946L17.0571 9.70361V17.7292C16.5822 17.9845 16.1441 18.1304 15.7791 18.1304C15.1947 18.1304 15.0484 17.9479 14.6107 17.401L11.0321 11.783V17.2186L12.1645 17.4741C12.1645 17.4741 12.1645 18.1304 11.2509 18.1304L8.73222 18.2765C8.65905 18.1304 8.73222 17.7659 8.98769 17.6929L9.64494 17.5108V10.324L8.73237 10.2509C8.6592 9.92222 8.84146 9.44837 9.35298 9.41159L12.0549 9.22946L15.7791 14.9205V9.88603L14.8296 9.77704C14.7567 9.37526 15.0484 9.08353 15.4135 9.04735L17.9335 8.90066ZM4.13151 3.4291L14.5376 2.66279C15.8155 2.55318 16.1443 2.6266 16.9475 3.21005L20.2692 5.54473C20.8173 5.9462 21 6.05551 21 6.49316V19.298C21 20.1005 20.7077 20.5751 19.6856 20.6477L7.60101 21.3775C6.83376 21.4141 6.4686 21.3047 6.0668 20.7937L3.6206 17.6199C3.18227 17.0357 3 16.5986 3 16.0873L3 4.70545C3 4.04918 3.29242 3.50177 4.13151 3.4291Z" />
    </Svg>
  )
}

Icon.displayName = 'NotionFill'

/**
 * Remix Icon: Notion Fill
 * @see {@link https://remixicon.com/icon/notion-fill Remix Icon Docs}
 */
export const NotionFill = memo(Icon)
