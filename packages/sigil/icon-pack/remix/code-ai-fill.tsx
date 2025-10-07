import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="m17.713 10.128-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757zm15.515 5.657L24 12 21.17 9.172l-1.414 1.414L21.171 12l-4.242 4.243z" />
    </Svg>
  )
})
Icon.displayName = 'CodeAiFill'
/**
 * Remix Icon: Code Ai Fill
 * @see {@link https://remixicon.com/icon/code-ai-fill Remix Icon Docs}
 */
export const CodeAiFill = Icon
