import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1851)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z"
          fill={color}
        />
        <Path
          d="M39.9996 19.9421H18.3191C14.0147 24.2467 11.4117 27.5699 8.75391 30.2277L20.0583 31.2464L37.6 29.5073C39.1309 26.6796 40.0003 23.4414 40.0003 20C40.0003 19.9807 39.9996 19.9615 39.9996 19.9421V19.9421Z"
          fill={color}
        />
        <Path
          d="M8.75355 10.3769H37.5357C34.1343 4.19188 27.557 0 19.9999 0C14.4917 0 9.50449 2.22742 5.8877 5.83L8.75355 10.3769Z"
          fill={color}
        />
        <Path
          d="M9.62277 29.5073C7.8248 31.3053 7.12996 32.8117 5.8291 34.1125C9.45059 37.749 14.4619 40 19.9996 40C27.6039 40 34.2168 35.7559 37.5993 29.5073H9.62277Z"
          fill={color}
        />
        <Path
          d="M5.85785 5.80005C-1.95262 13.6105 -1.95262 26.2739 5.85785 34.0844C9.08543 30.8568 12.1896 27.7527 20 19.9422L5.85785 5.80005Z"
          fill={color}
        />
        <Path
          d="M5.27574 19.9422C5.27574 17.0283 7.32363 14.594 10.0583 13.9968C9.63801 13.905 9.20191 13.8552 8.75394 13.8552C5.39215 13.8552 2.66699 16.5804 2.66699 19.9422C2.66699 23.304 5.39215 26.0291 8.75394 26.0291C9.20183 26.0291 9.63793 25.9794 10.0583 25.8876C7.32363 25.2903 5.27574 22.8561 5.27574 19.9422V19.9422Z"
          fill={color}
        />
        <Path
          d="M9.9916 14.7249L10.3154 15.7213H11.3631L10.5154 16.3371L10.8393 17.3335L9.9916 16.7177L9.14395 17.3335L9.46777 16.3371L8.62012 15.7213H9.66777L9.9916 14.7249Z"
          fill={color}
        />
        <Path
          d="M9.9916 17.3335L10.3154 18.33H11.3631L10.5154 18.9458L10.8393 19.9422L9.9916 19.3264L9.14395 19.9422L9.46777 18.9458L8.62012 18.33H9.66777L9.9916 17.3335Z"
          fill={color}
        />
        <Path
          d="M9.9916 19.9421L10.3154 20.9385H11.3631L10.5154 21.5544L10.8393 22.5508L9.9916 21.935L9.14395 22.5508L9.46777 21.5544L8.62012 20.9385H9.66777L9.9916 19.9421Z"
          fill={color}
        />
        <Path
          d="M9.9916 22.5508L10.3154 23.5472H11.3631L10.5154 24.163L10.8393 25.1595L9.9916 24.5437L9.14395 25.1595L9.46777 24.163L8.62012 23.5472H9.66777L9.9916 22.5508Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1851">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Comoros'

/**
 * Flags by `Deji.Zeal`: Comoros
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Comoros = memo(Icon)
