require 'byebug'

class HashSet
  attr_accessor :count, :num_buckets, :store

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

   def insert(num)
    # debugger
    if @count < @store.length
      #debugger
      #p num.hash
      idx = num.hash % @store.length
      if !@store[idx].include?(num)
        @store[idx] << num 
        @count += 1
      end
    else
      resize!(num)
      @count += 1
    end
  end

  def remove(num)
    if self.include?(num)
      x = self[num]
      @store.delete(x)
      @count -= 1
    end
  end

  def include?(num)
    idx = num.hash % @store.length
    @store[idx].include?(num)
  end

  private

  def [](num)
    idx = num.hash % @store.length
    return @store[idx]
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end

  def resize!(num)
    arr = Array.new(num_buckets * 2) { Array.new }
    len = arr.length
    @store.each do |subarr| 
      next if subarr.nil? 
      subarr.each do |ele|
        new_idx = ele.hash % len
        arr[new_idx] << ele
      end
    end
    idx_of_num = num.hash % len
    arr[idx_of_num] << num
    @store = arr
    @store
  end

end


# n = HashSet.new(5)
# n.insert(50)
# n.insert("howdy")
# n.insert([])
# n.insert({:a => 3, :b => 4})
# # n.insert(5)
# # n.insert(6)

