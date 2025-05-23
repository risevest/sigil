import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M6.641 7.313C7.968 7.728 9.863 8 12 8s4.031-.272 5.358-.687c1.643-.513 1.786-1.068 0-1.626C16.032 5.272 14.138 5 12 5c-2.137 0-4.032.272-5.359.687-1.778.555-1.618 1.12 0 1.626M12 3c-2.282 0-4.387.288-5.955.778-1.555.486-3.329 1.454-3.033 3.374l1.535 9.982c.338 2.199 1.904 4.16 4.247 4.567.962.167 2.077.299 3.206.299a19.04 19.04 0 0 0 3.206-.299c2.343-.406 3.908-2.368 4.247-4.567l1.535-9.982c.296-1.92-1.478-2.888-3.033-3.374C16.387 3.288 14.281 3 12 3"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'WastebasketFill'

/**
 * MingCute Icon: Wastebasket Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const WastebasketFill = memo(Icon)
