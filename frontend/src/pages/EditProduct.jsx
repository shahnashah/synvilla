import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";

export function EditProduct() {
    const { id } = useParams();
    const [formData, setFormData] = useState({
      name: "",
      description: "",
      image: null,
    });
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/products/${id}`);
          setFormData({ name: response.data.name, description: response.data.description, image: null });
        } catch (error) {
          console.error("Error fetching product", error);
        }
      };
      fetchProduct();
    }, [id]);
  
    const handleChange = (e) => {
      const { name, value, type, files } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: type === "file" ? files[0] : value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = new FormData();
      data.append("name", formData.name);
      data.append("description", formData.description);
      if (formData.image) {
        data.append("image", formData.image);
      }
  
      try {
        await axios.put(`http://localhost:5000/api/products/${id}`, data);
        navigate("/admin");
      } catch (error) {
        console.error("Error updating product", error);
      }
    };
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            className="w-full p-2 border rounded"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            className="w-full p-2 border rounded"
            value={formData.description}
            onChange={handleChange}
          />
          <input
            type="file"
            name="image"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
          <Button type="submit">Update Product</Button>
        </form>
      </div>
    );
  }
  