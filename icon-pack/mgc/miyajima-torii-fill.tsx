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
          d="M21.778 3.372a1 1 0 0 1 .116 1.075l-2 4a1 1 0 0 1-.777.546c-1.038.119-2.077.22-3.117.306v1.366a58.212 58.212 0 0 0 3.797-.644 1 1 0 0 1 .406 1.958c-.4.082-.801.158-1.203.23V18a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2v-5.095c-.692.059-1.374.095-2 .095-.626 0-1.308-.037-2-.095V18a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2v-5.79a50.632 50.632 0 0 1-1.203-.23 1 1 0 0 1 .406-1.96c1.258.258 2.525.47 3.797.645V9.299a99.544 99.544 0 0 1-3.116-.306 1.008 1.008 0 0 1-.778-.546l-2-4a1 1 0 0 1 1.143-1.415l.47.117.952.224.856.191.642.137.337.069c.265.053.536.107.81.158l.83.15c1.392.24 2.798.422 3.854.422 1.057 0 2.462-.181 3.853-.421l.83-.15.81-.16.98-.205.856-.19.482-.113c.314-.074.627-.15.939-.23a1 1 0 0 1 1.028.34ZM14 10.897v-1.46l-.827.04c-.407.014-.803.023-1.173.023s-.766-.009-1.173-.024L10 9.438v1.459c.703.063 1.387.103 2 .103.49 0 1.026-.025 1.581-.068z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'MiyajimaToriiFill'

/**
 * MingCute Icon: Miyajima Torii Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const MiyajimaToriiFill = memo(Icon)
