require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    data = DBConnection.execute2(<<-SQL)
      SELECT
        *
      FROM
        "#{self.table_name}"
    SQL
    arr = data.first
    results = []
    arr.each do |el| 
      results << el.to_sym
    end
    results
  end

  def self.finalize!

    cols = self.columns

    cols.each do |col|
      self.define_method(col) do 
        #self.instance_variable_get("@#{col}")
        self.attributes[col]
      end
    end

    cols.each do |col|
      self.define_method("#{col}=") do |new_val|
        #self.instance_variable_set("@#{col}", new_val)
        self.attributes[col] = new_val
      end
    end

  end

  def self.table_name=(table_name)

    #@table_name = "#{table_name}"
    #self.instance_variable_set(table_name, table_name)
    @table_name = table_name
    #@table_name = "#{table_name}"
  end

  def self.table_name
    # ...
    #@table_name
    if @table_name.nil?
      @table_name = "#{self}".tableize
    else
      @table_name
    end

    
  end

  def self.all
    # ...
  end

  def self.parse_all(results)
    # ...
  end

  def self.find(id)
    # ...
  end

  def initialize(params = {})
    # ...
    # params.each do |param|
    #   self.define_method(param) do 
    #     self.attributes[param]
    #   end
    # end

    params.each do |attr_name, attr_value|
      if self.colums.include?(attr_name)
        attr_name.to_sym
      else
        raise "unknown attribute '#{attr_name}'"
      end

    
  end

  def attributes
    # ...
    @attributes ||= {}
  end

  def attribute_values
    # ...
  end

  def insert
    # ...
  end

  def update
    # ...
  end

  def save
    # ...
  end
end
