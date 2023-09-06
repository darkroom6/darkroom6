# Hướng dẫn sử dụng Script

## Script Mô tả

Đây là một script bash được viết để thực hiện các tác vụ gỉa lập với bash và python.
Dưới đây là các tùy chọn và mô tả tương ứng của từng tùy chọn:

1. **IP INSPECTOR**: Tạo và hiển thị một loạt địa chỉ IP ngẫu nhiên, giả lập quá trình quét IP mạng.
2. **REROOT**: Xóa địa chỉ IP ngẫu nhiên, giả lập quá trình xóa địa chỉ IP mạng.
3. **SCAN MALWARE**: Chạy một tập lệnh Python để quét và phát hiện mã độc.
4. **PWD MINING**: Giả lập quá trình khai thác mật khẩu bằng cách in ra các mật khẩu ngẫu nhiên.
5. **BLOCK GREENDOOR**: Giả lập quá trình bảo vệ hệ thống khỏi một loạt tấn công.

## Yêu cầu

Trước khi chạy script, bạn cần đảm bảo rằng bạn đã cài đặt Bash và Python 3 (nếu bạn chọn tùy chọn "SCAN MALWARE"). 

## Cài đặt
### Hướng dẫn cài đặt Bash và Python 3 trên macOS
Bash và Python 3 là hai ngôn ngữ lập trình phổ biến được sử dụng rộng rãi trên macOS.Bash là một ngôn ngữ shell được sử dụng để điều khiển và quản lý hệ thống, trong khi Python 3 là một ngôn ngữ lập trình cấp cao được sử dụng để phát triển các ứng dụng đa nền tảng.

### Cài đặt Bash
  - Bash được cài đặt sẵn trên macOS, vì vậy bạn không cần phải cài đặt lại nó. Tuy nhiên, bạn có thể cập nhật Bash lên phiên bản mới nhất bằng cách sử dụng lệnh sau:
  ``` bash
  brew upgrade bash
  ```

### Cài đặt Python 3
  - Python 3 không được cài đặt sẵn trên macOS. Để cài đặt Python 3, bạn có thể sử dụng Homebrew hoặc Python.org.

1. Cài đặt bằng Homebrew
Để cài đặt Python 3 bằng Homebrew, hãy chạy lệnh sau:
    ``` bash
    brew install python3
    ```
2. Cài đặt từ Python.org
Để cài đặt Python 3 từ Python.org, hãy truy cập trang web của [Python](https://docs.python.org/3/) và tải xuống tệp trình cài đặt. Sau khi tải xuống tệp trình cài đặt, hãy chạy nó để cài đặt Python 3.

### Kiểm tra cài đặt
Sau khi cài đặt Bash và Python 3, bạn có thể kiểm tra cài đặt bằng cách chạy các lệnh sau:
``` bash
bash --version
```
``` bash
python3 --version
```
Các lệnh này sẽ in ra phiên bản của Bash và Python 3 mà bạn đã cài đặt.

### Tài liệu tham khảo
- Bash documentation: https://www.gnu.org/software/bash/manual/
- Python 3 documentation: https://docs.python.org/3/

## Sử dụng

### Bước 1: Cấp quyền thực thi cho script

Chạy lệnh sau để cấp quyền thực thi cho script:

```bash
chmod +x hacking.sh
```

### Bước 2: Chạy script
Chạy script bằng cách sử dụng lệnh sau:

```bash
./hacking.sh
```