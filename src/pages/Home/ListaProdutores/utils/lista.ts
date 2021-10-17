import JennyJack from 'assets/img/produtores/jenny_jack.png'
import SaladPot from 'assets/img/produtores/salad_pot.png';
import Potager from 'assets/img/produtores/potager.png'
import Leaves from 'assets/img/produtores/leaves.png'
import Grow from 'assets/img/produtores/grow.png'
import { v4 as uuidv4 } from 'uuid';

const listaDeProdutores = [{
  foto: JennyJack,
  avaliacao: 1,
  distancia: 500,
  label: 'Jenny Jack Farm',
  id: uuidv4()
},{
  foto: SaladPot,
  avaliacao: 0,
  distancia: 500,
  label: 'Salad Pot LTDA',
  id: uuidv4()
},{
  foto: Potager,
  avaliacao: 0,
  distancia: 500,
  label: 'Potager De La Rocade',
  id: uuidv4()
},{
  foto: Leaves,
  avaliacao: 0,
  distancia: 500,
  label: 'Leaves S.A',
  id: uuidv4()
},{
  foto: Grow,
  avaliacao: 0,
  distancia: 500,
  label: 'Grow.',
  id: uuidv4()
}]

export default listaDeProdutores;