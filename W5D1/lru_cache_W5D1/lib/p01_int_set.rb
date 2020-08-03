require 'byebug'

class MaxIntSet

  attr_accessor :max, :store
  def initialize(max)
    @max = max
    @store = Array.new(max, false)
  end

  def insert(num)
    range = (0...@max)
    if range.include?(num)
      if @store[num] == false
        @store[num] = true
      else 
        nil
      end
    else
      raise "Out of bounds"
  end

  end

  def remove(num)
    @store[num] = false
  end

  def include?(num)
    @store[num] == true
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet

  attr_accessor :store

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    idx = num % 20
    if !self.include?(num) 
      @store[idx] << num
    end
  end

  def remove(num)
    idx = num % 20
    if self.include?(num)
      @store[idx].delete(num)
    end
  end

  def include?(num)
    idx = num % 20
    return true if @store[idx].include?(num)
    false
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
  end

  def num_buckets
    @store.length
  end
end
#require 'byebug'
class ResizingIntSet
  
  attr_accessor :count, :num_buckets, :store
  

  def initialize(num_buckets = 20)
    # debugger
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    # debugger
    if @count < num_buckets
      # debugger
      idx = num % num_buckets
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
    idx = num % @store.length
    @store[idx].include?(num)
  end

  private

  def [](num)
    idx = num % @store.length
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
        new_idx = ele % len
        arr[new_idx] << ele
      end
    end
    idx_of_num = num % len
    arr[idx_of_num] << num
    @store = arr
    @store
  end

end


# n = ResizingIntSet.new(5)
# n.insert(1)
# n.insert(2)
# n.insert(3)
# n.insert(4)
# n.insert(5)
# n.insert(6)

