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
          d="M16.202 2.074c1.04.05 1.958.272 2.673.535.675.249 1.28.575 1.61.906.33.33.657.935.905 1.61a9.05 9.05 0 0 1 .536 2.673c.085 1.79-.345 3.927-1.92 5.969l-.018.047-1.437 2.876a1 1 0 0 1-1.855-.169 11.709 11.709 0 0 1-4.14 1.178l-.51.042-.583.039-.976.053-1.052.05c-.503.024-1.014.048-1.508.074a21.299 21.299 0 0 1-.184 1.653 5.056 5.056 0 0 1-.231.952c-.191.502-.597.923-1.169.923-.752 0-1.436-.53-1.993-1.057l-.268-.26-.38-.381c-.564-.58-1.187-1.315-1.187-2.13 0-.46.267-.758.436-.897.297-.245.681-.36 1.062-.437l.376-.066a21.341 21.341 0 0 1 1.654-.184l.14-2.896.037-.64.038-.583c.014-.183.028-.354.043-.51.138-1.454.541-2.88 1.178-4.14a1 1 0 0 1-.168-1.855l2.828-1.415a.78.78 0 0 1 .094-.04c2.041-1.575 4.179-2.006 5.969-1.92m.748 4.976a1.5 1.5 0 1 0-2.122 2.121 1.5 1.5 0 0 0 2.122-2.12Z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'FishFill'

/**
 * MingCute Icon: Fish Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const FishFill = memo(Icon)
