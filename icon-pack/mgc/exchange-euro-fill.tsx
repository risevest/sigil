import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M1.498 12.082c-.01-1.267 1.347-1.987 2.379-1.406l.113.07 2.678 1.804c1.424.96.538 3.145-1.099 2.915l-.138-.025-.108-.024a7.504 7.504 0 0 0 13.175.335 1.5 1.5 0 0 1 2.599 1.498c-2.317 4.019-7.119 6.152-11.815 4.893a10.502 10.502 0 0 1-7.784-10.06M12.53 6.5c1.323 0 2.463.677 3.25 1.66a1 1 0 0 1-1.56 1.25c-.487-.606-1.09-.91-1.69-.91-.945 0-1.993.845-2.377 2.29l-.05.21H13a1 1 0 0 1 .117 1.993L13 13h-2.898c.335 1.573 1.438 2.5 2.428 2.5.6 0 1.203-.304 1.69-.91a1 1 0 1 1 1.56 1.25c-.787.983-1.927 1.66-3.25 1.66-2.316 0-3.977-1.967-4.415-4.282L8.077 13H8a1 1 0 0 1-.117-1.993L8 11h.077c.372-2.408 2.065-4.5 4.453-4.5m-9.626.251C5.22 2.732 10.022.6 14.718 1.858a10.502 10.502 0 0 1 7.784 10.06c.01 1.267-1.347 1.987-2.379 1.407l-.113-.07-2.678-1.805c-1.424-.96-.538-3.145 1.099-2.914l.138.025.109.023A7.504 7.504 0 0 0 5.504 8.25a1.5 1.5 0 1 1-2.6-1.498"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'ExchangeEuroFill'

/**
 * MingCute Icon: Exchange Euro Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const ExchangeEuroFill = memo(Icon)
