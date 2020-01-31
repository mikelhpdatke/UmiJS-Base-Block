Usages: 
umi block add ./src/blocks/Sample --path=SinhVien

Nếu model này cần dùng global (tưc là ở những page khác cũng cần dùng model này thì chạy lệnh sau): 
sudo mv src/pages/SinhVien/model.tsx src/models/sinhvien.tsx
Ngược lại, model sẽ chỉ truy cập trong page đó.

### Tác dụng: tạo 1 trang mới ở đường dẫn src/pages/SinhVien kèm theo các file: SinhVien/models/model.tsx (namespace: 'sinhvien'), src/services/SinhVien. Chỉ cần config ở file index.js (chứa Table) và Form.js trong SinhVien/Sample là xong # UmiJS-Base-Block
