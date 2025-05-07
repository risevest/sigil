import { memo } from 'react'
import type { IconProps } from '../../types'
import {
  Svg,
  Circle as _Circle,
  G,
  Path,
  Rect,
  Defs,
  ClipPath,
  FeBlend,
  FeFlood,
  FeGaussianBlur,
  Filter,
} from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 89 88" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_9040_38346)">
        <Path
          d="M44.5 34C50.023 34 54.5 38.477 54.5 44C54.5 49.523 50.023 54 44.5 54C38.977 54 34.5 49.523 34.5 44C34.5 38.477 38.977 34 44.5 34ZM44.5 36C42.3783 36 40.3434 36.8429 38.8431 38.3431C37.3429 39.8434 36.5 41.8783 36.5 44C36.5 46.1217 37.3429 48.1566 38.8431 49.6569C40.3434 51.1571 42.3783 52 44.5 52C46.6217 52 48.6566 51.1571 50.1569 49.6569C51.6571 48.1566 52.5 46.1217 52.5 44C52.5 41.8783 51.6571 39.8434 50.1569 38.3431C48.6566 36.8429 46.6217 36 44.5 36ZM44.49 42C45.048 42 45.5 42.452 45.5 43.01V48.134C45.6906 48.2441 45.8396 48.414 45.9238 48.6173C46.0081 48.8207 46.0229 49.0462 45.9659 49.2588C45.9089 49.4714 45.7834 49.6593 45.6087 49.7933C45.4341 49.9273 45.2201 50 45 50H44.51C44.3774 50 44.246 49.9739 44.1235 49.9231C44.001 49.8724 43.8896 49.798 43.7958 49.7042C43.702 49.6104 43.6276 49.499 43.5769 49.3765C43.5261 49.254 43.5 49.1226 43.5 48.99V44C43.2348 44 42.9804 43.8946 42.7929 43.7071C42.6054 43.5196 42.5 43.2652 42.5 43C42.5 42.7348 42.6054 42.4804 42.7929 42.2929C42.9804 42.1054 43.2348 42 43.5 42H44.49ZM44.5 39C44.7652 39 45.0196 39.1054 45.2071 39.2929C45.3946 39.4804 45.5 39.7348 45.5 40C45.5 40.2652 45.3946 40.5196 45.2071 40.7071C45.0196 40.8946 44.7652 41 44.5 41C44.2348 41 43.9804 40.8946 43.7929 40.7071C43.6054 40.5196 43.5 40.2652 43.5 40C43.5 39.7348 43.6054 39.4804 43.7929 39.2929C43.9804 39.1054 44.2348 39 44.5 39Z"
          fill={color}
        />
      </G>
      <G filter="url(#filter0_f_9040_38346)">
        <_Circle cx="44.5" cy="44" r="10" fill={color} />
      </G>
      <Defs>
        <Filter
          id="filter0_f_9040_38346"
          x="0.833508"
          y="0.333508"
          width="87.333"
          height="87.333"
          filterUnits="userSpaceOnUse"
        >
          <FeFlood result="BackgroundImageFix" floodOpacity="0" />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <FeGaussianBlur
            stdDeviation="16.8332"
            result="effect1_foregroundBlur_9040_38346"
          />
        </Filter>
        <ClipPath id="clip0_9040_38346">
          <Rect width="24" height="24" fill={color} transform="translate(32.5 32)" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'InfoBlur'

export const InfoBlur = memo(Icon)
