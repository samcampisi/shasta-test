package com.usermanagementtest; // Change this to your package name.

import android.content.Intent;
import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;

import org.devio.rn.splashscreen.SplashScreen;
import android.os.Bundle;

public class SplashActivity extends AppCompatActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);

    Intent intent = new Intent(this, MainActivity.class);
    startActivity(intent);
    finish();
  }
}