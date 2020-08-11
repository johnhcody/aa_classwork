class AttrAccessorObject
  def self.my_attr_accessor(*names)
    # ...

    names.each do |name|
      self.define_method(name) do 
        self.instance_variable_get("@#{name}")
      end
    end

    names.each do |name|
      self.define_method("#{name}=") do |new_val|
        self.instance_variable_set("@#{name}", new_val)
      end
    end

  end
end

