
//
// State Class
var State = Class({
    constructor: function State( s, unique, with_errors ) {
        var self = this;
        // this enables unique state "names"
        // thus forces highlight to update
        // however updates also occur when no update necessary ??
        self.id = unique ? uuid("state") : "state";
        if ( s instanceof State )
        {
            // clone
            self.line = s.line;
            self.column = s.column;
            self.indent = s.indent;
            self.stack = s.stack.clone();
            self.queu = s.queu.slice();
            self.symb = clone( s.symb, true );
            self.token = clone( s.token, true );
            self.block = s.block;
            self.errors = s.errors;
            self.err = s.err;
        }
        else
        {
            self.line = s || 0;
            self.column = 0;
            self.indent = null;
            self.token = null;
            self.block = null;
            self.stack = new Stack();
            self.queu = [];
            self.symb = {};
            self.errors = !!with_errors;
            self.err = self.errors ? {} : null;
        }
    }
    
    ,id: null
    ,line: 0
    ,column: 0
    ,indent: 0
    ,stack: null
    ,queu: null
    ,symb: null
    ,err: null
    ,errors: false
    ,token: null
    ,block: null
    
    ,dispose: function( ) {
        var self = this;
        self.id = null;
        self.line = null;
        self.column = null;
        self.indent = null;
        self.token = null;
        self.block = null;
        self.symb = null;
        self.errors = null;
        self.err = null;
        self.queu = null;
        if ( self.stack ) self.stack.dispose( );
        self.stack = null;
        return self;
    }
    
    ,clone: function( unique ) {
        return new State( this, unique );
    }
    
    // used mostly for ACE which treats states as strings, 
    // make sure to generate a string which will cover most cases where state needs to be updated by the editor
    ,toString: function() {
        var self = this;
        return ['', self.id, self.line, self.token ? self.token.name : '0', self.block ? self.block.name : '0'].join('_');
    }
});
