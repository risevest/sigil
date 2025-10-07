import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m20.97 17.172-1.414 1.414-3.535-3.535-.073.074-.707 3.536-1.415 1.414-4.242-4.243-4.95 4.95-1.414-1.414 4.95-4.95-4.243-4.243L5.34 8.761l3.536-.707.073-.074-3.536-3.536L6.828 3.03zM10.365 9.394l-.502.502-2.822.565 6.5 6.5.564-2.822.502-.502zm8.411.074-1.34 1.34 1.414 1.415 1.34-1.34.707.707 1.415-1.415-8.486-8.485-1.414 1.414.707.707-1.34 1.34 1.414 1.415 1.34-1.34z" />
    </Svg>
  )
})
Icon.displayName = 'UnpinLine'
/**
 * Remix Icon: Unpin Line
 * @see {@link https://remixicon.com/icon/unpin-line Remix Icon Docs}
 */
export const UnpinLine = Icon
