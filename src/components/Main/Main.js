import { Chap1 } from './Chap1';
import { Chap2 } from './Chap2';
import { Chap3 } from './Chap3';
import { Chap4 } from './Chap4';
import './main.css';

function Main(){
	
	
	
	return(
		<>
			<div className="mainContainer">
				<div className = "mainContentAreaUno" id = 'uno'>
						<Chap1/>
				</div>
				<div className = 'mainContentAreaDos' id = 'dos'>
					<div>
						<Chap2/>
					</div>
				</div>
				<div className = 'mainContentAreaTres' id = 'tres'>
					<div>
						<Chap3/>
					</div>
				</div>
				<div className = 'mainContentAreaQuatro' id = 'quatro'>
					<div>
						<Chap4/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Main