FSH���     tex      �   varying highp vec2 v_texcoord0;
uniform sampler2D tex;
void main ()
{
  lowp vec4 tmpvar_1;
  tmpvar_1 = texture2D (tex, v_texcoord0);
  gl_FragColor = tmpvar_1;
}

 