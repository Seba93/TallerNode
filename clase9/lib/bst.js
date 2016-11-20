//Ejercicio: Binary Search Tree: Hacer TDD con operaciones append, max, min, height

//Creacion de arbol de busqueda binario vacio
function BinarySearchTree() {
    this.root = null;
}

//Insercion de un nuevo nodo en el arbol. Recibe como parametro un numero real
BinarySearchTree.prototype.append = function(value) {
	
	//Se crea nodo a partir de valor
	var currentNode = {};
	currentNode.value = value;
	currentNode.left = null;
	currentNode.right = null;
	
	//Si el arbol esta vacio, se asigna el nodo creado recientemente como raiz
	if (!this.root) {
		this.root = currentNode;
	}

	//En caso contrario...
	else {
		
		//...se implementa funcion anonima hace lo siguiente:
		var traverse = function(node) {

			//Si el nodo ya existe, no se hace nada
			if (value === node.value) {
				return;
			}

			//Si no existe, se recorre el arbol, hasta agregar de forma valida el nuevo nodo

			//Si el valor del nuevo nodo es mayor al del nodo actual en el recorrido,
			//y ademas el subarbol derecho de este ultimo es nulo, se agrega el nuevo valor.
			//En caso contrario, se recorre recursivamente el subarbol derecho.
			else if (value > node.value) {
				if (!node.right) {
					node.right = currentNode;
					return;
				}
			
				else {
					traverse(node.right);
				}
			}

			//Por otro lado, si el valor del nuevo nodo es menor al del nodo actual en el recorrido,
			//y ademas el subarbol izquierdo de este ultimo es nulo, se agrega el nuevo valor.
			//En caso contrario, se recorre recursivamente el subarbol izquierdo.
			else if (value < node.value) {
				if (!node.left) {
					node.left = currentNode;
					return;
				}

				else {
					traverse(node.left);
				}
			}	
		};
		//Asi, se aplica funcion anonima sobre arbol actual 
		traverse(this.root);
	}

	//Se retorna arbol con nodo agregado
	return this;
};

//Encontrar maximo valor del arbol
BinarySearchTree.prototype.maxValue = function() {
	
	//Como los valores mas grandes se situan a la derecha del arbol, entonces...

	//...se implementa funcion anomina que hace lo siguiente:
	var traverse = function(node) {
		//Si para un nodo determinado no existen subarboles derechos, entonces se retorna ese valor
		//como el maximo
		if (!node.right) {
			return node.value;
		}

		//En caso contrario, se recorre recursivamente el arbol hasta encontrar el maximo
		else {
			return traverse(node.right);
		}
	}
	
	//Se inicia busqueda del maximo desde la raiz del arbol
	return traverse(this.root);
};

//Encontrar valor minimo del arbol
BinarySearchTree.prototype.minValue = function() {
	//Como los valores mas pequenos se situan a la izquierda del arbol, entonces...

	//...se implementa funcion anomina que hace lo siguiente:
	var traverse = function(node) {
		//Si para un nodo determinado no existen subarboles izquierdos, entonces se retorna ese valor
		//como el minimo
		if (!node.left) {
			return node.value;
		}

		//En caso contrario, se recorre recursivamente el arbol hasta encontrar el minimo
		else {
			return traverse(node.left);
		}
	}

	//Se inicia busqueda del maximo desde la raiz del arbol
	return traverse(this.root);
};

//Determinar altura del arbol
BinarySearchTree.prototype.height = function () {
	//Se inicializa altura del arbol en cero
	var height = 0;
	
	//Se implementa funcion anonima que...
	var traverse = function(node, actualHeight) {
		//Si el subarbol analizado no tiene nodos, entonces se retorna null
		if (!node) {
			return null;
		}

		//En caso contrario, se actualiza la altura y...
		if (node) {
			if (actualHeight > height) {
				height = actualHeight;
			}
			
			//... se continua recorriendo el arbol
			traverse(node.left, actualHeight + 1);
			traverse(node.right, actualHeight + 1);
		}
	};	

	//Se busca altura del arbol recorriendolo desde su raiz
	traverse(this.root, 0);
	return height;	
};

module.exports = {
	BinarySearchTree,
}
