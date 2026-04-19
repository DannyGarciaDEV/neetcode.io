 class TrieNode {
    constructor() {
        this.children = {}; // map of char -> TrieNode
        this.isEnd = false;
    }
}

var WordDictionary = function() {
    this.root = new TrieNode();
};

WordDictionary.prototype.addWord = function(word) {
    let node = this.root;
    
    for (let ch of word) {
        if (!node.children[ch]) {
            node.children[ch] = new TrieNode();
        }
        node = node.children[ch];
    }
    
    node.isEnd = true;
};

WordDictionary.prototype.search = function(word) {
    
    const dfs = (index, node) => {
        if (index === word.length) {
            return node.isEnd;
        }
        
        let ch = word[index];
        
        if (ch === '.') {
            // try all possible children
            for (let key in node.children) {
                if (dfs(index + 1, node.children[key])) {
                    return true;
                }
            }
            return false;
        } else {
            if (!node.children[ch]) return false;
            return dfs(index + 1, node.children[ch]);
        }
    };
    
    return dfs(0, this.root);
};