
import { InputComponent } from './input.component';

export default {
  title: 'InputComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: InputComponent,
  props: {
    label: 'Label'
  }
})
