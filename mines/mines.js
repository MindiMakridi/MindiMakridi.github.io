function MineField(options){
    this._rows = options.rows;
    this._cells = options.cells;
    this._table = this.renderTable();
    this._bombs = [];
    this._openedCells = [];
    this._flaggedCells = [];
    this._bombsCount = options.bombsCount;
    this._template = options.template.innerHTML;
    this._modal =  document.createElement('div');
    this._generated = false;


    this._table.addEventListener('mousedown', this.clickCell.bind(this));
    this._table.oncontextmenu = function(){
        return false;
    };

    
  
    
    
}

MineField.prototype.renderTable = function()
{
        var table = document.createElement('table');
        var tbody = document.createElement('tbody');
        table.appendChild(tbody);
        for(var i = 0; i<this._rows; i++){
           var row = document.createElement('tr');
           for(var n = 0; n<this._cells; n++){
                var cell = document.createElement('td');
                row.appendChild(cell);
           }
           tbody.appendChild(row);
        }
        document.body.appendChild(table);
        return table;
};

MineField.prototype.generate = function(firstClicked)
{
        if(this._generated) return;
        for(var i = 0; i<this._bombsCount; i++){
            var x = Math.floor(Math.random()*9);
            var y = Math.floor(Math.random()*9);
            while(this.checkForBomb(x,y) || (x == firstClicked[0] && y == firstClicked[1])){
                x = Math.floor(Math.random()*9);
                y = Math.floor(Math.random()*9);
            }
            this._bombs.push([x, y]);
            
        }
        this._generated = true;
};

MineField.prototype.checkForBomb = function(x,y)
{
  for(var i = 0; i< this._bombs.length; i++){
    if(this._bombs[i][0] == x && this._bombs[i][1] == y){
        return true;
    }
  }
    return false;
};


MineField.prototype.clickCell = function(event)
{
    event.preventDefault();
    if(event.button==0){
        this.toggleCell(event.target);
    }
    else if(event.button==2){
        this.flagCell(event.target);
    }
};

MineField.prototype.toggleCell = function(target)
{
        if(target.tagName!="TD" || target.classList.contains("opened")) return false;
        var x = target.cellIndex;
        var y = target.parentNode.rowIndex;
        this.generate([x, y]);
        this.open(x,y); 
};

MineField.prototype.flagCell = function(target)
{
        if(target.tagName!="TD" || target.classList.contains("opened")) return false;
        target.classList.toggle('flagged');
        var x = target.cellIndex;
        var y = target.parentNode.rowIndex;
        this._flaggedCells.push([x, y]);
};

MineField.prototype.open = function(x, y)
{
        var cell = this._table.rows[y].cells[x];
        if(cell.classList.contains('opened')|| cell.classList.contains('flagged')) return;
        if(this.checkForBomb(x, y)){
            cell.classList.add("bomb");
            this.openAll();
            cell.classList.add('exploded');
            }
        else{
            cell.classList.add('opened');
            this._openedCells.push([x, y]);
            this.checkWin();
            var bombsNearby = this.countBombsNearby(x,y);
            if(bombsNearby>0){
                cell.innerHTML = bombsNearby;
            }
            else{
                var neighbours = this.getNeighbours(x, y);
                for(var i = 0; i<neighbours.length; i++){
                    this.open(neighbours[i][0], neighbours[i][1]);
                }
            }
        } 
};

MineField.prototype.countBombsNearby = function(x, y)
{
        var count = 0;
        var neighbours = this.getNeighbours(x, y);
        for(var i = 0; i<neighbours.length; i++){
            count+= this.checkForBomb(neighbours[i][0], neighbours[i][1])? 1:0;
        }
        return count;
};

MineField.prototype.getNeighbours = function(x, y)
{
        var neighbours = [];
        var min = 0;
        var maxX = this._cells;
        var maxY = this._rows;
        var top = null;
        var bottom = null;
        var left = null;
        var right = null;
        for(var i = -1; i<=1; i++){
            var row = this._table.rows[y+i]
            if(row){
                for(var n = -1; n<=1; n++){
                    var cell = row.cells[x+n];
                    if(cell){
                        neighbours.push([x+n, y+i]);
                    }
                }
            }
        }
        return neighbours;
};

MineField.prototype.openAll = function(){
        for(var i = 0; i< this._bombs.length; i++){
            var x = this._bombs[i][0];
            var y = this._bombs[i][1];
            var cell = this._table.rows[y].cells[x];
            cell.classList.remove('flagged');
            cell.classList.add("bomb");
            
        }
        this.popup("Вы проиграли");
};

MineField.prototype.popup = function(text)
{
        this._modal.innerHTML = this._template;
        var self = this;
        var pop = this._modal.querySelector('.popup-body');
        var button = pop.querySelector('.new-game');
        pop.firstChild.data = pop.firstChild.data.replace('{{text}}', text);
        button.onclick = function(){
            self.reset();
        };
        document.body.appendChild(this._modal);
};

MineField.prototype.reset = function()
{
        document.body.removeChild(this._modal);
        this.removeOpenedCells();
        this.removeBombCells();
        this.removeFlaggedCells();
};


MineField.prototype.removeOpenedCells = function()
{
        for(var i = 0; i< this._openedCells.length; i++){
            var x = this._openedCells[i][0];
            var y = this._openedCells[i][1];
            this._table.rows[y].cells[x].classList.remove('opened');
            this._table.rows[y].cells[x].innerHTML = "";
        }
        this._openedCells = [];

};

MineField.prototype.removeBombCells = function()
{
    for(var i = 0; i< this._bombs.length; i++){
        var x = this._bombs[i][0];
        var y = this._bombs[i][1];
        this._table.rows[y].cells[x].classList.remove('bomb');
        this._table.rows[y].cells[x].classList.remove('exploded');
    }
    this._bombs = [];
    this._generated = false;
};

MineField.prototype.removeFlaggedCells = function()
{
    for(var i = 0; i< this._flaggedCells.length; i++){
        var x = this._flaggedCells[i][0];
        var y = this._flaggedCells[i][1];
        this._table.rows[y].cells[x].classList.remove('flagged');
    }
    this._flaggedCells = [];
};


MineField.prototype.checkWin =function()
{
        var openedCells = this._openedCells.length;
        var toOpen = (this._rows*this._cells) - this._bombsCount;
        if(openedCells==toOpen){
            this.popup("Победа!");
        }
};

options = {};
options.rows = 9;
options.cells = 9;
options.bombsCount = 10;
options.template = document.getElementById('template-popup');
var field = new MineField(options);
