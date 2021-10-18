import JennyJack from 'assets/img/produtores/jenny_jack.png'
import SaladPot from 'assets/img/produtores/salad_pot.png';
import Potager from 'assets/img/produtores/potager.png'
import Leaves from 'assets/img/produtores/leaves.png'
import Grow from 'assets/img/produtores/grow.png'
import { v4 as uuidv4 } from 'uuid';
import { Produtor } from 'types/produtor';

const listaDeProdutores: Produtor[] = [{
  foto: JennyJack,
  avaliacao: 1,
  distancia: 5000,
  nome: 'Jenny Jack Farm',
  id: uuidv4()
},{
  foto: SaladPot,
  avaliacao: 0,
  distancia: 400,
  nome: 'Salad Pot LTDA',
  id: uuidv4()
},{
  foto: Potager,
  avaliacao: 0,
  distancia: 100,
  nome: 'Potager De La Rocade',
  id: uuidv4()
},{
  foto: Leaves,
  avaliacao: 0,
  distancia: 1500,
  nome: 'Leaves S.A',
  id: uuidv4()
},{
  foto: Grow,
  avaliacao: 0,
  distancia: 900,
  nome: 'Grow.',
  id: uuidv4()
}]

export default listaDeProdutores;