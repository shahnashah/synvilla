import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Checkbox,
  FormControlLabel,
  IconButton
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/admin/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/admin/productDelete/${selectedProduct._id}`);
      setShowDeleteModal(false);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  const handleEdit = async () => {
    try {
      const formData = new FormData();
      formData.append("name", selectedProduct.name);
      formData.append("price", selectedProduct.price);
      formData.append("description", selectedProduct.description);
      formData.append("isNewArrival", selectedProduct.isNewArrival);
      if (selectedProduct.image instanceof File) {
        formData.append("image", selectedProduct.image);
      }
      await axios.put(`/api/admin/productManage/${selectedProduct._id}`, formData);
      setShowEditModal(false);
      fetchProducts();
    } catch (error) {
      console.error("Error updating product", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Products</h2>
      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>New Arrival</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={product._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>
                  <img src={product.image} alt={product.name} style={{ height: "50px", width: "50px", objectFit: "cover" }} />
                </TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.isNewArrival ? "Yes" : "No"}</TableCell>
                <TableCell>{product.description}</TableCell>
                <TableCell>₹{product.price}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => { setSelectedProduct(product); setShowEditModal(true); }}>
                    <Edit />
                  </IconButton>
                  <IconButton color="error" onClick={() => { setSelectedProduct(product); setShowDeleteModal(true); }}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Delete Confirmation Dialog */}
      <Dialog open={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to delete <strong>{selectedProduct?.name}</strong>?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDeleteModal(false)}>Cancel</Button>
          <Button color="error" onClick={handleDelete}>Delete</Button>
        </DialogActions>
      </Dialog>

      {/* Edit Product Dialog */}
      <Dialog open={showEditModal} onClose={() => setShowEditModal(false)}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <TextField fullWidth margin="dense" label="Product Name" value={selectedProduct?.name || ""} onChange={(e) => setSelectedProduct({ ...selectedProduct, name: e.target.value })} />
          <TextField fullWidth margin="dense" label="Price" type="number" value={selectedProduct?.price || ""} onChange={(e) => setSelectedProduct({ ...selectedProduct, price: e.target.value })} />
          <TextField fullWidth margin="dense" label="Description" multiline rows={3} value={selectedProduct?.description || ""} onChange={(e) => setSelectedProduct({ ...selectedProduct, description: e.target.value })} />
          <input type="file" onChange={(e) => setSelectedProduct({ ...selectedProduct, image: e.target.files[0] })} />
          <FormControlLabel control={<Checkbox checked={selectedProduct?.isNewArrival || false} onChange={(e) => setSelectedProduct({ ...selectedProduct, isNewArrival: e.target.checked })} />} label="New Arrival" />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowEditModal(false)}>Cancel</Button>
          <Button color="primary" onClick={handleEdit}>Save Changes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ManageProducts;





// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "../api/axios";

// const ManageProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("/api/admin/products");
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products", error);
//     }
//   };

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`/api/admin/productDelete/${selectedProduct._id}`);
//       setShowDeleteModal(false);
//       fetchProducts();
//     } catch (error) {
//       console.error("Error deleting product", error);
//     }
//   };

//   const handleEdit = async () => {
//     try {
//       const formData = new FormData();
//       formData.append("name", selectedProduct.name);
//       formData.append("price", selectedProduct.price);
//       formData.append("description", selectedProduct.description);
//       formData.append("isNewArrival", selectedProduct.isNewArrival);
//       if (selectedProduct.image instanceof File) {
//         formData.append("image", selectedProduct.image);
//       }
//       await axios.put(
//         `/api/admin/productManage/${selectedProduct._id}`,
//         formData
//       );
//       setShowEditModal(false);
//       fetchProducts();
//     } catch (error) {
//       console.error("Error updating product", error);
//     }
//   };

//   return (
//     <div className="p-6">
      
//       <h2 className="text-2xl font-bold mb-4">Manage Products</h2>
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">S.No</th>
//             <th className="border p-2">Product Name</th>
//             <th className="border p-2">Image</th>
//             <th className="border p-2">Category</th>
//             <th className="border p-2">New Arrival</th>
//             <th className="border p-2">Description</th>
//             <th className="border p-2">Price</th>
//             <th className="border p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product, index) => (
//             <tr key={product._id}>
//               <td className="border p-2">{index + 1}</td>
//               <td className="border p-2">{product.name}</td>
//               <td className="border p-2">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="h-16 w-16 object-cover"
//                 />
//               </td>
//               <td className="border p-2">{product.category}</td>
//               <td className="border p-2">
//                 {product.isNewArrival ? "Yes" : "No"}
//               </td>
//               <td className="border p-2">{product.description}</td>
//               <td className="border p-2">₹{product.price}</td>
//               <td className="border p-2 grid gap-2">
//                 <button
//                   className="bg-blue-500 text-white px-3 py-1 rounded"
//                   onClick={() => {
//                     setSelectedProduct(product);
//                     setShowEditModal(true);
//                   }}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="bg-red-500 text-white px-3 py-1 rounded"
//                   onClick={() => {
//                     setSelectedProduct(product);
//                     setShowDeleteModal(true);
//                   }}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Delete Modal */}
//       {showDeleteModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl font-bold mb-2">Confirm Deletion</h3>
//             <p>
//               Are you sure you want to delete{" "}
//               <strong>{selectedProduct.name}</strong>?
//             </p>
//             <div className="mt-4 flex justify-end gap-2">
//               <button
//                 className="bg-gray-300 px-4 py-2 rounded"
//                 onClick={() => setShowDeleteModal(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="bg-red-500 text-white px-4 py-2 rounded"
//                 onClick={handleDelete}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Edit Modal */}
//       {showEditModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//             <h3 className="text-xl font-bold mb-4">Edit Product</h3>
//             <input
//               type="text"
//               className="w-full p-2 border rounded mb-2"
//               value={selectedProduct.name}
//               onChange={(e) =>
//                 setSelectedProduct({ ...selectedProduct, name: e.target.value })
//               }
//             />
//             <input
//               type="number"
//               className="w-full p-2 border rounded mb-2"
//               value={selectedProduct.price}
//               onChange={(e) =>
//                 setSelectedProduct({
//                   ...selectedProduct,
//                   price: e.target.value,
//                 })
//               }
//             />
//             <input
//               type="file"
//               className="w-full p-2 border rounded mb-2"
//               onChange={(e) =>
//                 setSelectedProduct({
//                   ...selectedProduct,
//                   image: e.target.files[0],
//                 })
//               }
//             />
//             <textarea
//               className="w-full p-2 border rounded mb-2"
//               value={selectedProduct.description}
//               onChange={(e) =>
//                 setSelectedProduct({
//                   ...selectedProduct,
//                   description: e.target.value,
//                 })
//               }
//             />
//             <div className="flex items-center mb-4">
//               <input
//                 type="checkbox"
//                 checked={selectedProduct.isNewArrival}
//                 onChange={(e) =>
//                   setSelectedProduct({
//                     ...selectedProduct,
//                     isNewArrival: e.target.checked,
//                   })
//                 }
//               />
//               <label className="ml-2">New Arrival</label>
//             </div>
//             <div className="flex justify-end gap-2">
//               <button
//                 className="bg-gray-300 px-4 py-2 rounded"
//                 onClick={() => setShowEditModal(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//                 onClick={handleEdit}
//               >
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageProducts;




