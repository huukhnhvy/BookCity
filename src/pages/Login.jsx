import styled from "styled-components";
import Navbar from "../components/Navbar";
import React from 'react';
import "../App";

const Container = styled.div``;

const Login = () => {
  return (
    <Container>
      <Navbar></Navbar>
      <div class="container">
        <input type="checkbox" id="flip"></input>
        <div class="cover">
          <div class="front">
            <img src="http://300b5338.vws.vegacdn.vn/image/img.news/0/0/0/8341.jpg?v=1&w=480&h=295&nocache=1" alt=""></img>
            <div class="text">
            </div>
          </div>
          <div class="back">
            <img class="backImg" src="http://300b5338.vws.vegacdn.vn/image/img.news/0/0/0/8341.jpg?v=1&w=480&h=295&nocache=1" alt=""></img>
            <div class="text">
            </div>
          </div>
        </div>
        <div class="forms">
          <div class="form-content">
            <div class="login-form">
              <div class="title">Đăng nhập</div>
              <form action="#">
                <div class="input-boxes">
                  <div class="input-box">
                    <i class="fas fa-envelope"></i>
                    <input type="text" placeholder="Nhập địa chỉ email" required></input>
                  </div>
                  <div class="input-box">
                    <i class="fas fa-lock"></i>
                    <input type="password" placeholder="Nhập mật khẩu" required></input>
                  </div>
                  <div class="text"><a href="#">Quên mật khẩu?</a></div>
                  <div class="button input-box">
                    <input type="submit" value="Đăng nhập"></input>
                  </div>
                  <div class="text sign-up-text">Bạn chưa có tài khoản? <label for="flip">Đăng ký</label></div>
                </div>
              </form>
            </div>
            <div class="signup-form">
              <div class="title">Đăng ký</div>
              <form action="#">
                <div class="input-boxes">
                  <div class="input-box">
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="Nhập họ và tên" required></input>
                  </div>
                  <div class="input-box">
                    <i class="fas fa-envelope"></i>
                    <input type="text" placeholder="Nhập địa chỉ email" required></input>
                  </div>
                  <div class="input-box">
                    <i class="fas fa-lock"></i>
                    <input type="password" placeholder="Nhập mật khẩu" required></input>
                  </div>
                  <div class="button input-box">
                    <input type="submit" value="Đăng ký"></input>
                  </div>
                  <div class="text sign-up-text">Bạn đã có tài khoản? <label for="flip">Đăng nhập</label></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>

  );
};

export default Login;