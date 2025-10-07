import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M6 4v4h12V4h2.007c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 21.007V4.993C3 4.445 3.445 4 3.993 4zm3 13H7v2h2zm0-3H7v2h2zm0-3H7v2h2zm7-9v4H8V2z" />
    </Svg>
  )
})
Icon.displayName = 'SurveyFill'
/**
 * Remix Icon: Survey Fill
 * @see {@link https://remixicon.com/icon/survey-fill Remix Icon Docs}
 */
export const SurveyFill = Icon
