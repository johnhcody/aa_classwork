require "byebug"

class PolyTreeNode
    attr_accessor :value, :parent, :children
    def initialize(value)
        @parent = nil
        @children = []
        @value = value
    end
#b.parent = a 

#b.parent = a

# b.parent = c   // c.children = [b,t,y,v,w]
# b.parent = nil
# c.children.delte(b)
# c = b.parent // self.parent


    def parent=(new_parent) 
        #debugger
        if self.parent == nil  
            #debugger
            @parent = new_parent
            new_parent.children << self 
        else  self.parent != nil
            @parent.children.delete(self) 
            @parent = new_parent
            #debugger
            new_parent.children << self unless new_parent == nil 
        end 
    end

    #  'a' = Node.new
    #  a.add_child(b)
    #  b.parent=(self)

    def add_child(child)
        child.parent = self #now self is a parent for the child
        self.children << child unless self.children.include?(child)    
    end

    def remove_child(child)
        #debugger
        raise "error" if child.value == 'root'
        self.children.delete(child)  #smth.children.delete(child)  child = c  // c.parent = b
        child.parent = nil   # smth.parent=nil
    end
    #a = 'a'
    #b = 'b'
    #c = 'c'
    #d = 'd'
    
    # a = PolyTreeNode.new
    # a.dfs('f')



    def dfs(target_value)  # target_value == node.value
        
        return self if self.value == target_value

        self.children.each do |child|            
            result = child.dfs(target_value)
            return result if !result.nil?
        end

        nil
    end
    # a.bfs('d')
    #[b,c]

    def bfs(target_value)
        arr = [self]
        
        until arr.length == 0
            el = arr.shift 
            if el.value != target_value 
                if !el.children.empty?
                    el.children.each {|child| arr << child}
                end
            else 
                return el
            end
        end
        nil 
    end
 
end


