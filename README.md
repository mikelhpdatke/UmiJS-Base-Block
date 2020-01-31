1. Usages: 
umi block add https://github.com/mikelhpdatke/UmiJS-Base-Block --path=SinhVien

2. 
- Nếu model này cần dùng global (tưc là ở những page khác cũng cần dùng model này thì chạy lệnh sau): 
sudo mv src/pages/SinhVien/model.tsx src/models/sinhvien.tsx
- Ngược lại, model sẽ chỉ truy cập trong page đó.

3. 
- Tác dụng: tạo 1 trang mới ở đường dẫn src/pages/SinhVien kèm theo các file: SinhVien/models/model.tsx (namespace: 'sinhvien') src/services/SinhVien. 
- Chỉ cần config ở file index.js (chứa Table) và Form.js trong SinhVien/Sample là xong # UmiJS-Base-Block
